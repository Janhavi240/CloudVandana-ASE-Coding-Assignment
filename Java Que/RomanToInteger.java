//B. Enter a Roman Number as input and convert it to an integer. (ex IX = 9)

public class RomanToInteger {
    public static int romanToInt(String s) {
        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int currValue = romanCharToInt(s.charAt(i));

            if (currValue < prevValue) {
                result -= currValue;
            } else {
                result += currValue;
            }

            prevValue = currValue;
        }

        return result;
    }

    public static int romanCharToInt(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0; // Invalid Roman numeral character
        }
    }

    public static void main(String[] args) {
        String romanNumeral = "IX"; // Change this to your input Roman numeral
        int result = romanToInt(romanNumeral);
        System.out.println(romanNumeral + " = " + result);
    }
}
