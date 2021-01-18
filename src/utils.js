export const calcCapacityy = (data) => {
  let capacity = {};
  const today = data.filter(
    (it) => new Date(it.time).getDay() == new Date().getDay()
  );

  capacity["today"] = today.length;
  const tomorrow = data.filter(
    (it) => new Date(it.time).getDay() == new Date().getDay() + 1
  );

  capacity["tomorrow"] = tomorrow.length;

  capacity["all"] = data.length;

  return capacity;
};
export const dataByDay = (data, day) => {
  let newData;
  if (day == "today") {
    newData = data.filter(
      (it) => new Date(it.time).getDay() == new Date().getDay()
    );
  } else if (day == "tomorrow") {
    newData = data.filter(
      (it) => new Date(it.time).getDay() == new Date().getDay() + 1
    );
  }
  return newData;
};
export const zeroFirst = (hours, minutes) => {
  let h;
  if (hours < 10) {
    h = "0" + hours;
  } else {
    h = hours;
  }
  let m;
  if (minutes < 10) {
    m = "0" + minutes;
  } else {
    m = minutes;
  }
  return h + ":" + m;
};
