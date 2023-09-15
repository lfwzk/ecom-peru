export const calcTimeDifference = (startDate, endDate) => {
    const timeDifference = endDate - startDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return ({ days: days, hours: hours, minutes: minutes, seconds: seconds });
  }
export const getRemainingTime = (startDateStr, endDateStr) => {
  
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const currentDate = new Date();
  
    if (endDate - startDate >= 0) {
      if (currentDate >= startDate && currentDate <= endDate) {
        const timeDifference = calcTimeDifference(currentDate, endDate);
        return timeDifference
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  export function calculatePercentageDiscount(initialPrice, finalPrice) {
    if ((initialPrice >= 0 && finalPrice >= 0)) {
      const discountAmount = initialPrice - finalPrice;
      const percentageDiscount = (discountAmount / initialPrice) * 100;
      return percentageDiscount.toFixed(2); // Return the percentage with 2 decimal places
    }  
    return 0;
  }