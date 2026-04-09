# Analytics - Event taxonomy

## CTA
event: cta_click  
params:
- location: hero | sticky | products | final | cases | tech_depth
- label: "Request Initial Technical Assessment"

## Form
event: form_start  
params:
- form: contact

event: form_submit  
params:
- form: contact

## Scroll
event: scroll_25  
event: scroll_50  
event: scroll_75

## Optional (recommended)
event: email_click  
params:
- location: contact | sticky

event: phone_click  
params:
- location: contact | sticky

event: micro_cta_click  
params:
- type: spec | integration | case
