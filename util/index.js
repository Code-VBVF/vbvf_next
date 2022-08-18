import axios from "axios";
import imageUrlBuilder from "@sanity/image-url";
import { DateTime } from "luxon";

const SanityClient = require("@sanity/client");

export const sanity = new SanityClient({
  projectId: "bhphg9ym",
  dataset: "production",
  apiVersion: "2022-07-21",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export function sanityUrlFor(source) {
  return builder.image(source);
}

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
export function getMobileOperatingSystem() {
  var userAgent =
    typeof window !== "undefined"
      ? navigator.userAgent || navigator.vendor || window.opera
      : null;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

export function isMobileDevice() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}

export function isOver(date) {
  const end = new Date();
  const dateArr = date.split("-");
  end.setFullYear(dateArr[0]);
  end.setMonth(dateArr[1] - 1); //months start at 0 hence decrementing by 1
  end.setDate(dateArr[2]);

  return end.getTime() < Date.now(); // will return false if end is in the future (aka study is not over)
}

export function sanityFormatTodaysDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export async function livestreamHappeningNow() {
  const nd = await DateTime.fromObject({}, { zone: "America/Chicago" });

  if (process.env.STREAM != "none") {
    return process.env.STREAM;
  } else {
    if (
      nd.day === 3 && //wednesday
      nd.hour >= 18 && //between 6pm
      nd.hour <= 21 // and 9pm
    ) {
      return "wednesday";
    } else if (
      nd.day === 0 && //sunday
      nd.hour >= 10 && //between 10am
      nd.hour <= 13 // and 1pm
    ) {
      return "sunday";
    }
  }
  return null;
}

export function nthWeekdayOfMonth(weekday, n, testDate = new Date()) {
  // Usage check
  if (typeof weekday !== "number" || typeof n !== "number") {
    throw new Error(
      "Function nthWeekdayOfMonth Usage Error: nthWeekdayOfMonth(<weeekday 0-6>, <n>, [testDate])"
    );
  }
  weekday = Math.floor(weekday % 7);
  n = Math.floor(n);

  // Calculate the first instance of the given weekday in the given month
  let monthBegin = new Date(testDate.getFullYear(), testDate.getMonth(), 1);
  let monthBeginWeekday = monthBegin.getDay();

  // Calculate how many days from beginning of month until the first instance of the given weekday
  let daysUntilFirstWeekday = (weekday - monthBeginWeekday + 7) % 7;

  // Start with this date then add 7 days for each week
  let nthWeekdayDate = 1 + daysUntilFirstWeekday + 7 * (n - 1);

  // Return final Date
  return new Date(testDate.getFullYear(), testDate.getMonth(), nthWeekdayDate);
}

export function nthSundayHasCome(n, testDate = new Date()) {
  // Usage check
  if (typeof n !== "number") {
    throw new Error(
      "Function nthSundayHasCome Usage Error: nthSundayHasCome(<n>, [testDate])"
    );
  }

  return testDate.getTime() >= nthWeekdayOfMonth(0, n, testDate).getTime();
}

export function getOrdinalNum(number) {
  let selector;

  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }

  return number + ["th", "st", "nd", "rd", ""][selector];
}
