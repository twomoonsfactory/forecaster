export default class homeController {
  constructor($log, $timeout){
    this.$log = $log;
    this.$timeout = $timeout;
    this.test = true;
    this.displayWeather = false;
    this.$log.log('app initialized');
    this.searchBy = "";
    this.error = "";
  }
  getWeather(){
    if(this.displayWeather){
     this.displayWeather = false;
   }
   this.$timeout(this.checkInput.bind(this));
  }
  checkInput(){
    if(this.searchBy.toString().length!==5){
      this.error = "You must enter a 5 digit zip code."
      this.displayWeather = false;
    }
    else {
      this.error = ""
      this.displayWeather = true;
    }
  }
  clear(){
    this.displayWeather = false;
    this.searchBy = "";
    this.error = "";
  }
}
homeController.$inject = ['$log', '$timeout'];
