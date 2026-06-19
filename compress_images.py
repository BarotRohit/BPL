import os
from PIL import Image

def compress_images(directory, max_size=1920, quality=80):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                path = os.path.join(root, file)
                try:
                    with Image.open(path) as img:
                        # Convert to RGB if PNG with alpha or RGBA
                        if img.mode in ('RGBA', 'P'):
                            img = img.convert('RGB')
                        
                        # Calculate new size maintaining aspect ratio
                        ratio = min(max_size / float(img.size[0]), max_size / float(img.size[1]))
                        if ratio < 1.0:
                            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
                            img = img.resize(new_size, Image.LANCZOS)
                        
                        # Save with optimization
                        img.save(path, 'JPEG', quality=quality, optimize=True)
                        print(f"Compressed: {file}")
                except Exception as e:
                    print(f"Failed to compress {file}: {e}")

if __name__ == "__main__":
    gallery_dir = "/home/tuvoc/Tuvoc-Learning/BPL/bpl-app/public/gallery"
    compress_images(gallery_dir)
