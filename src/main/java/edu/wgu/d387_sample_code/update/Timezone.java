package edu.wgu.d387_sample_code.update;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.ZonedDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@CrossOrigin(origins = "http://localhost:4200")
public class Timezone {

    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh:mm a");

    public static String timeConversion() {

        // Change the start time to Eastern Time (ET)
        String startTime = "2023-08-19T12:00:00-04:00";  // Eastern Time with offset for EST

        // Parse the start time string into a ZonedDateTime object (interpreted as Eastern Time)
        ZonedDateTime startZonedDateTime = ZonedDateTime.parse(startTime);

        // Define ZoneIds for UTC, Mountain Time (MT), and Eastern Time (ET)
        ZoneId utcTime = ZoneId.of("UTC");
        ZoneId mtTime = ZoneId.of("America/Los_Angeles");
        ZoneId etTime = ZoneId.of("America/New_York");

        // Convert the start time to different time zones
        ZonedDateTime utcTimezone = startZonedDateTime.withZoneSameInstant(utcTime);
        ZonedDateTime etTimezone = startZonedDateTime.withZoneSameInstant(etTime);
        ZonedDateTime mtTimezone = startZonedDateTime.withZoneSameInstant(mtTime);

        // Format the converted times using the formatter
        String utcTimeString = utcTimezone.format(formatter);
        String etTimeString = etTimezone.format(formatter);
        String mtTimeString = mtTimezone.format(formatter);

        // Construct and return a string with the formatted times
        return "Start time in Eastern Time (ET): " + etTimeString +
                ", Start time in Mountain Time (MT): " + mtTimeString +
                ", Start time in Coordinated Universal Time (UTC): " + utcTimeString;



    }

    // This method is used to test the timeConversion method
    public static void printTimeConversion() {
        String result = timeConversion();
        System.out.println(result);
    }
}


