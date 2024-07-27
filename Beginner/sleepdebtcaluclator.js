const getSleepHours = (day) => {
    day = day.toLowerCase();
    if (day === "monday") {
      return 8;
    } else if (day === "tuesday") {
      return 7;
    } else if (day === "wednesday") {
      return 6;
    } else if (day === "thursday") {
      return 5;
    } else if (day === "friday") {
      return 4;
    } else if (day === "saturday") {
      return 3;
    } else if (day === "sunday") {
      return 2;
    }
  };
  
  const getActualSleepHours = () => {
    const sum =
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
    return sum;
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("Perfect Sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      const hours = actualSleepHours - idealSleepHours;
      console.log(`Sleep ${hours} Less hours.`);
    } else if (actualSleepHours < idealSleepHours) {
      const hours = idealSleepHours - actualSleepHours;
      console.log(`Sleep ${hours} More hours.`);
    }
  };
  
  console.log(calculateSleepDebt());
  
  //Test Calls
  //
  //console.log(getActualSleepHours());
  //console.log(getSleepHours('monday'));
  