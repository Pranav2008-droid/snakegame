function grid(){
for (var x = 0; x < width; x += 20){
    line(x, 0, x, height);
         for (var y = 0; y < height; y += 20) {
        line(0, y, width, y);
     }
  }
}