export default class zipCodeService {
  constructor($log, $http, zipApi){
    this.$log = $log;
    this.$http = $http;
    this.zipApi = zipApi;
    this.getZip('Taylorsville', 'UT');
  }
  getZip(city, state){
    let returnInfo = null;
    this.$http.jsonp(this.zipApi.url+'&city='+city+'&state='+state+'&callback=?')
      .success(data=>{
        returnInfo = data;
        this.$log.log('got info, zip is: ' + returnInfo.zipcodes[0]);
      })
      .error(data=>{
        this.$log.log('error pulling data');
      });
  }
}
zipCodeService.$inject = ['$log', '$http', 'zipApi'];
