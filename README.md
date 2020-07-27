# Front-End Engineering Test

Our new client, FantasticBoxCo, has given us a brief for their new online
bulk-box ordering service.

This new web-based service will let their customers order boxes to
specifications that perfectly meet their packaging needs.

The client should be able to select the options for their box, and receive a
quote at the end.

## Specifications

They view the quoting system as a four step process

### Step 1: Box dimension and quantity

- Enter width, height and length of the box you require
- Enter the quantity of boxes you would like to order

### Step 2: Select Cardboard grade

FantasticBoxCo offer a variety of grades of cardboard, each altering the price
per M^2:

- A grade: \$0.20 M^2
- B grade: \$0.10 M^2
- C grade: \$0.05 M^2 (this option should not be available for boxes larger than 2M^2)

### Step 3: Select Print Quality

A variety of printing options are available for any branding / logos which are
required:

- 3 color printing: \$0.20 M^2
- 2 color printing: \$0.10 M^2
- Black only printing: \$0.05 M^2
- No printing (plain cardboard): \$0.00
- FantasticBoxCo branding: 5% discount on total price

### Step 4: Optional extras

- Handles: \$0.10 per box
- Reinforced bottom: \$0.05 per box (only available with grade A cardboard)

## What we want to see

By the end of this four step process, the user should see an accurate quote
taking into account all of the options and quantities they have selected.

If the user has picked any mutually exclusive options (for example, a box size
of larger than 2M^2 and grade C cardboard), they should not receive the quote
but a validation error telling them how to fix their quote.

This is an empty project set up with create-react-app. All you need to do to
start working on it is "npm i && npm start".

Please send us back the completed project without the node_modules folder, so
that we can also try it with "npm i && npm start". If you have written something
that you think might need explaining, or for any other feedback, you can add an
"instructions.txt" file.

Our technical expectations:

- You should use React. You can use other libraries and architecture of your choice.
- The CSS is already written for you. Feel free to add some styles if needed.
- The HTML is already written for you in the `example.html`. You should extract that to JSX components while keeping the same structure and class names.
- The page is divided in several sections, each of which depends on the previous one. Ideally, the user should not be able to go to the next step before properly completing the current one, but he should be able to go back and make changes.
- A test suite proving correctness of the business logic (end-to-end acceptance testing is a nice extra).
- A working example is available at <https://chb.github.io/frontend-test-assignment/>. Feel free to add anything that you might find useful and related to the task.
