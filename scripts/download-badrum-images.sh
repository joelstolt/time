#!/bin/bash
# Download before/after bathroom images from old WordPress site
# Run from project root: bash scripts/download-badrum-images.sh

DIR="public/images/badrum-fore-efter"
mkdir -p "$DIR"
BASE="https://timeoutservice.se/wp-content/uploads/2026/02"

echo "Downloading 23 before/after images..."

curl -sL "$BASE/2026_fore_efter_badrum_1-1024x1024.jpg"  -o "$DIR/badrum-1.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_2-1024x1024.jpg"  -o "$DIR/badrum-2.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_3-1024x1024.jpg"  -o "$DIR/badrum-3.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_4-1024x1024.jpg"  -o "$DIR/badrum-4.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_5.png"             -o "$DIR/badrum-5.png" &
curl -sL "$BASE/2026_fore_efter_badrum_6.png"             -o "$DIR/badrum-6.png" &
curl -sL "$BASE/2026_fore_efter_badrum_7.png"             -o "$DIR/badrum-7.png" &
curl -sL "$BASE/2026_fore_efter_badrum_8-1024x1024.jpg"  -o "$DIR/badrum-8.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_9-1024x1024.jpg"  -o "$DIR/badrum-9.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_10-1024x1024.jpg" -o "$DIR/badrum-10.jpg" &
wait
echo "10/23 done..."

curl -sL "$BASE/2026_fore_efter_badrum_11-1024x978.jpg"  -o "$DIR/badrum-11.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_12-1024x993.jpg"  -o "$DIR/badrum-12.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_13-1024x999.jpg"  -o "$DIR/badrum-13.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_14-1024x1016.jpg" -o "$DIR/badrum-14.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_15-1024x1016.jpg" -o "$DIR/badrum-15.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_16-1024x933.jpg"  -o "$DIR/badrum-16.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_17-1024x1024.jpg" -o "$DIR/badrum-17.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_18-1024x1024.jpg" -o "$DIR/badrum-18.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_19-1024x1024.jpg" -o "$DIR/badrum-19.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_20-1024x1024.jpg" -o "$DIR/badrum-20.jpg" &
wait
echo "20/23 done..."

curl -sL "$BASE/2026_fore_efter_badrum_21-1024x1024.jpg" -o "$DIR/badrum-21.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_22-1024x1024.jpg" -o "$DIR/badrum-22.jpg" &
curl -sL "$BASE/2026_fore_efter_badrum_23-1024x1024.jpg" -o "$DIR/badrum-23.jpg" &
wait

echo "All 23 images downloaded to $DIR/"
ls -lh "$DIR/" | tail -25
