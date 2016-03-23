/**
 * Created by Daniel on 2/6/2016.
 */

/**
 * Created by viveksh2 on 6/15/15.
 */

angular.module("registrationApp", [])
    .controller("regCtrl", function ($scope)

    {
        $scope.person = {};
        $scope.firstNameInvalid = false;            //  first name
        $scope.lastNameInvalid = false;             //  last name
        $scope.emailInvalid = false;                //  email
        $scope.researchInvalid = false;             //  Select
        $scope.person.newsletterOptIn = false;      //  Checkbox

        $scope.doShow = false;

        $scope.person.channels = [                          //  Select - Array of objects
            { value: "television", label: "Television" },
            { value: "radio", label: "Radio" },
            { value: "social-media", label: "Social Media"},
            { value: "other", label: "Other"},
            { value: "pet-store", label: "Pet Store"}
        ];



        /* When the document first loads, both firstNameInvalid and lastNameInvalid evaluate to false.
         Consequently, the ngShow directives will keep the span elements, and therefore the validation
         messages, hidden.
         When the user presses the submit button, we make use of the fact that AngularJS
         can tell us, on a field-by-field basis, whether or not an input is valid.
         In the case of the First name field, which we named firstName,
         in the form which we named registrationForm, we can use
         $scope.registrationForm.firstName.$valid to see if this field is currently valid.
         As you might expect, this scope.formName.fieldName.$property format applies
         to the Last name field too.
         Both of the conditional statements in the register() method work the same way;
         they each check to see if these fields are not currently valid.
         If indeed they are not,
         then the firstNameInvalid and lastNameInvalid variables are set to true.
         This will cause the ngShow directive to show the validation error messages.*/

        $scope.register =  function(){
            if($scope.registrationForm.firstName.$invalid){       //  INPUT VALIDATION:  if no value (input field empty) >>
                $scope.firstNameInvalid = true;                   //  $scope.firstNameInvalid = true
            }

            if($scope.registrationForm.lastName.$invalid){      //  INPUT VALIDATION:
                $scope.lastNameInvalid = true;
            }

            if($scope.registrationForm.email.$invalid){         //  INPUT VALIDATION:
                $scope.emailInvalid = true;
            }

            if($scope.registrationForm.channels.$invalid){      //  INPUT VALIDATION:
                $scope.researchInvalid = true;
            }

            if($scope.registrationForm.$valid){                 //  FORM VALIDATION:
                $scope.doShow = true;
            }

        };

    });