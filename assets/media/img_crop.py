from PIL import Image, ImageOps
import numpy as np

# Load the image
img_path = 'shoujuwang.png'
img = Image.open(img_path)

# Create a mask for the circular crop
mask = Image.new('L', img.size, 0)
mask_paste = ImageOps.fit(mask, (min(img.size), min(img.size)), centering=(0.5, 0.5))
mask_draw = Image.new('L', mask_paste.size, 255)
mask.paste(mask_draw, mask_paste.getbbox())

# Apply the mask to the image
img_round = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
img_round.putalpha(mask)

# Save the cropped image
cropped_img_path = 'shoujuwangcrop.png'
img_round.save(cropped_img_path)
