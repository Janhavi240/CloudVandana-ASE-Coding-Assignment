
//C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)
public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input.toLowerCase()); // Convert to lowercase for case-insensitive check

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        boolean[] alphabetCheck = new boolean[26]; // 26 letters in the English alphabet

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                alphabetCheck[index] = true;
            }
        }

        for (boolean b : alphabetCheck) {
            if (!b) {
                return false; // If any letter is missing, it's not a pangram
            }
        }

        return true; // All letters are present
    }
}

