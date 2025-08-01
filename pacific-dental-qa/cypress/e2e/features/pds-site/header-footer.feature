@pds
Feature: Validate the PDS Header-Footer

    # FOOTER SECTION
    Scenario Outline: Verify presence of links text in the footer
        Given I am on the "pds" homepage
        When I navigate to the "sprint-2-demo/hero-with-cta-center-aligned-.html"
        And I scroll to the footer section
        Then I should see the following links text
            | Text                                     |
            | Copyright © 2023 Pacific Dental Services |
            | Contact                                  |
            | Find an office                           |
            | CA Privacy Policy                        |
            | Legal information                        |
            | Team member apply                        |

        When I click on the "<Link>" link in the Footer
        Then I should be navigated to the "<URL>" page and status code should be 200
        Examples:
            | Link                                     | URL       |
            | Copyright © 2023 Pacific Dental Services | copyright |
            | Contact                                  | contact   |
            | Find an office                           | office    |
            | CA Privacy Policy                        | policy    |
            | Legal information                        | legal     |
            | Team member apply                        | member    |

    Scenario Outline: Verify presence and links of social media icons in the footer section
        Given I am on the "pds" homepage
        When I navigate to the "sprint-2-demo/hero-with-cta-center-aligned-.html"
        When I scroll to the footer section
        Then I should see the following social media icons
            | Links                      |
            | https://www.facebook.com/  |
            | https://www.twitter.com/   |
            | https://www.linkedin.com/  |
            | https://www.instagram.com/ |

        And I click on each social media icon "<Icon>"
        Then I should be redirected to the correct social media URL "<URL>" for each icon
        Examples:
            | Icon      | URL                        |
            | facebook  | https://www.facebook.com/  |
            | twitter   | https://twitter.com/       |
            | linkedin  | https://www.linkedin.com/  |
            | instagram | https://www.instagram.com/ |

