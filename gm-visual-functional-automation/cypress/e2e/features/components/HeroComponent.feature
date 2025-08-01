
Feature: Validate gm glass page Components
    @component
    Scenario: Verify hero component
        Given I navigate to the "chevrolet/na/us/en/accessories/shopbyvehicle/colorado.html"
        When page loads completely
        Then user is able to see hero banner component
        And user is able to see multiple hero banner component
        And hero banner is present with title "Colorado Accessories"
        And hero banner is present with description "Explore tailored accessories designed specifically for your Chevrolet Colorado."
        And user can see image of "colorado" configured in hero banner
        And button in hero banner takes user to valid configured link
        And user can click on video to "pause" it
        And user can click on video to "play" it
        And default action available on volume button of video is "Unmute"
        And user can click on sound button to "Mute" video
        And user can click on sound button to "Unmute" video