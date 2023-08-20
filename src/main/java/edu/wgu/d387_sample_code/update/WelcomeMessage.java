package edu.wgu.d387_sample_code.update;

import java.util.Locale;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

public class WelcomeMessage implements Runnable {
    private final Locale locale;
    private String message;
    private final Object lock = new Object(); // For synchronization

    private static final String DEFAULT_MESSAGE = "Error in ResourceBundle"; // Default message if resource is missing

    public WelcomeMessage(Locale locale) {
        this.locale = locale;
    }

    public String getMessage() {
        if (message == null) {
            synchronized (lock) {
                if (message == null) {
                    ResourceBundle bundle = ResourceBundle.getBundle("message", locale);
                    try {
                        message = bundle.getString("welcomeMessage");
                    } catch (MissingResourceException e) {
                        message = DEFAULT_MESSAGE;
                    }
                }
            }
        }
        return message;
    }

    @Override
    public void run() {
        System.out.println(getMessage());
    }
}
