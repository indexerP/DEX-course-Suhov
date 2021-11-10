export const dataProcessingAboutSalary = (f, s) => {};

export const calculateCashback = (isCashback, sum, cb) => {};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (f, s, t) => {

  
  let today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0'); 


  today = month + ' ' + day   //число и месяц
  

  let name = f;
  let days = s;
  let money = t;

  if (days[1].getMonth() && days[1].getDate() === today) {
    
    let result = "У" + name[1] + "сегодня праздник, его премия составляет" + money[1]/100*Number(days[1].getDate());
    });
    
    else if (days[2].getMonth() && days[2].getDate() === today) {
    
      let result = "У" + name[2] + "сегодня праздник, его премия составляет" + money[2]/100*Number(days[2].getDate());
      });

      else if (days[3].getMonth() && days[3].getDate() === today) {
    
        let result = "У" + name[3] + "сегодня праздник, его премия составляет" + money[3]/100*Number(days[1].getDate());
        });
      else  if (days[4].getMonth() && days[4].getDate() === today) {
    
          let result = "У" + name[4] + "сегодня праздник, его премия составляет" + money[4]/100*Number(days[1].getDate());
          });
      else if(){
        let result = "сегодня не у кого нет дня рождения"
      };

    return Math.round10(result);   //округилил
  


};
