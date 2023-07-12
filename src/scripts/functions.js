function gen_uname(tempname) {
    const nums = [];
    
    for (var i = 0; i < 4; i++) {
      let rand_num = Math.floor(Math.random() * 10);
      nums.push(rand_num);
    }
    
    var str = nums.join('');

    var uname = tempname + "#" + str

    console.log("Generated Name: " + uname)
    
    return uname;
  }
  
export { gen_uname };