// Your code here

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
  let testEmployee = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }//closes employee
  //console.log(testEmployee)
  return testEmployee

}//closes createEmployeeRecord

let check = ['mike', 'maddness', 'genius', '52']
let cloud = ['cloud', 'strife', 'solder', '32']
let more = [cloud, check]

 
function createEmployeeRecords(things){
  return things.map(thing => createEmployeeRecord(thing))
}//closes createEmployeeRecords

//console.log(createEmployeeRecords(more))

function createTimeInEvent(record, stamp){
  const d = stamp.split(' ');
  //console.log(d)
  let date = d[0]
  let hour = parseInt(d[1])
  
  let newEvent = {
    type: "TimeIn", 
    hour: hour,
    date: date
  }//closes newEvent

  //console.log(newEvent.type)
  record.timeInEvents.push(newEvent)
  //console.log(record)
  return record
}//closes createTimeInEvent

/* createTimeInEvent(createEmployeeRecord(cloud), '2014-02-28 1400')
createTimeOutEvent(createEmployeeRecord(cloud), '2014-02-28 2000')
 */
//console.log(cloud)
//console.log(createEmployeeRecord(cloud))

function createTimeOutEvent(record, stamp){
  const d = stamp.split(' ');
  //console.log(d)
  let date = d[0]
  let hour = parseInt(d[1])
  
  let newEvent = {
    type: "TimeOut", 
    hour: hour,
    date: date
  }//closes newEvent
  //console.log(newEvent.type)
  record.timeOutEvents.push(newEvent)
  //console.log(record)
  return record
}//closes createTimeOutEvent

/* const ff7 = createEmployeeRecord(['Barret', "Wallace", "leader", "22"])
createTimeInEvent(ff7, '2014-02-28 1400')
createTimeOutEvent(ff7, '2014-02-28 2000')
console.log(ff7) */

function hoursWorkedOnDate(record, date){
  const n = record.timeInEvents.find(record => {
    return record.date === date
  })
  const o = record.timeOutEvents.find(record => {
    return record.date === date
  })
  //if(n.date == date && o.date == date){
  const result = o.hour - n.hour    
  return result/100
  //}//closes If state

}//closes hoursWorkedOnDate

//hoursWorkedOnDate(ff7, '2014-02-28')

function wagesEarnedOnDate(record, date){
  const hours = hoursWorkedOnDate(record, date)
  let pay = hours * record.payPerHour
  return pay
}//closes wagesEarnedOnDate

function allWagesFor(record){
  let wages = record.timeInEvents.map(timeInObj => timeInObj.date)
  console.log(wages)
  
  let total = wages.reduce((date, index) => {
    return date + wagesEarnedOnDate(record, index)
  }, 0)
  console.log(total)
  return total

}//close allWagesFor

//allWagesFor(ff7)

function calculatePayroll(records){
  console.log("Records: ", records[0])
  //console.log("TimeInEvents: ", records[0].timeInEvents[0].date)
  const inTime = records.map((timeObj => timeObj.timeInEvents))
  let pay = 0
  console.log("list of time: ", inTime[0])
  for(let i in records){
    pay += allWagesFor(records[i], inTime[i])
  }
  //const wages = hoursWorkedOnDate(records[0], inTime.date)
  console.log("wages: ", pay)
  return pay
  //take each record from 'records' and return the pay earned
  //then add all the pay together
}

/* let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
rRecord = createTimeInEvent(rRecord, "2019-01-11 0900")
rRecord = createTimeOutEvent(rRecord, "2019-01-11 1300")
 */
