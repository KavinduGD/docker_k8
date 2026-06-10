package com.experts.first_app;

import org.junit.jupiter.api.Test;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiControllerTest {

    @Test
    void testHelloEndpoint() {
        ApiController controller = new ApiController();
        Map<String, String> response = controller.sayHello();
        assertEquals("Hello, World!", response.get("message"));
        assertEquals("success", response.get("status"));
    }
}
