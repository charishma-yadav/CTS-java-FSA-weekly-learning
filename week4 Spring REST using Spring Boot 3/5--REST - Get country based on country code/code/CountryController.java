import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/country")
public class CountryController {

    private static final Map<String, String> countryMap = new HashMap<>();

    static {
        countryMap.put("IN", "India");
        countryMap.put("US", "United States");
        countryMap.put("UK", "United Kingdom");
        countryMap.put("CA", "Canada");
        countryMap.put("AU", "Australia");
    }

    @GetMapping("/{code}")
    public Map<String, String> getCountryByCode(@PathVariable String code) {
        String name = countryMap.getOrDefault(code.toUpperCase(), "Unknown Country");
        Map<String, String> response = new HashMap<>();
        response.put("code", code.toUpperCase());
        response.put("name", name);
        return response;
    }
}
