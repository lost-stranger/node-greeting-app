module.exports = {

  getTime: function () {
    console.log(new Date().toLocaleString());
  },

  getDayOfWeek: function () {
    var d = new Date();
    var n = d.getDay();
      if( n == 6 )
      console.log("It's the weekend!");
      else
      console.log("Its not weekend :(");
  }

}
