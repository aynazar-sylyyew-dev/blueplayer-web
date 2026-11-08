import argparse
import io
import sys
from pathlib import Path

try:
    from PIL import Image, ImageChops, ImageDraw
except ImportError:
    sys.exit("Нужен Pillow:  pip install pillow")

ROUND_RATIO = 0.2941


def rounded_mask(size: int, radius: int) -> Image.Image:
    m = Image.new("L", (size, size), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return m


def bake_round(img: Image.Image, ratio: float = ROUND_RATIO) -> Image.Image:
    size = img.size[0]
    radius = max(1, round(size * ratio))
    mask = rounded_mask(size, radius)
    out = img.convert("RGBA")
    out.putalpha(ImageChops.darker(out.getchannel("A"), mask))
    return out


ap = argparse.ArgumentParser()
ap.add_argument("png", nargs="?", default="public/icon/icon.png")
ap.add_argument("-o", "--out", default="public/icon/icon-tab.png")
ap.add_argument("--size", type=int, default=128)
a = ap.parse_args()

src = Path(a.png)
if not src.exists():
    sys.exit(f"Не найден {src}")

img = Image.open(src).convert("RGBA")
small = img.resize((a.size, a.size), Image.LANCZOS)

out = Path(a.out)
out.parent.mkdir(parents=True, exist_ok=True)
buf = io.BytesIO()
bake_round(small).save(buf, format="PNG", optimize=True)
out.write_bytes(buf.getvalue())

print(f"{src.name} ({src.stat().st_size} Б) -> {out.name} ({out.stat().st_size} Б), resize {a.size}x{a.size}")
print(f"Запечённое скругление: {ROUND_RATIO*100:.1f}% (радиус {round(a.size*ROUND_RATIO)}px при {a.size}px)")