package edu.wgu.d387_sample_code.update;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/time")
@CrossOrigin(origins = "http://localhost:4200")
public class TimezoneController {

    @GetMapping("/convert")
    public String convertTimeZone() {
        return Timezone.timeConversion();
    }
}