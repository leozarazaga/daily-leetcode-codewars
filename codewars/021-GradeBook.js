/*********************************************************************************************

"Grade Book"

Complete the function so that it finds the average of
the three scores passed to it and returns the letter
value associated with that grade.

    Numerical Score	                Letter Grade
    90 <= score <= 100	            'A'
    80 <= score < 90	            'B'
    70 <= score < 80	            'C'
    60 <= score < 70	            'D'
    0 <= score < 60	                'F'

********************************************************************************************/

function getGrade(s1, s2, s3) {
    let score = Math.round((s1 + s2 + s3) / 3);

    switch (true) {
        case (score >= 90 && score <= 100):
            return "A";
        case (score >= 80 && score < 90):
            return "B";
        case (score >= 70 && score < 80):
            return "C";
        case (score >= 60 && score < 70):
            return "D";
        case (score >= 0 && score < 60):
            return "F";
        default:
            break;
    }
}

console.log(getGrade(89, 89, 90));
//Time: 734ms