# Steps to start using MUI

1. Install MUI: `npm install @mui/material @emotion/react @emotion/styled`

2. Create a new folder in the `src/app` directory. For now, you can name it `example`. (the name of the folder will be used in the url path)

3. Create a new file in the folder you created in step 2. You must name this file `page.jsx`.

4. Add the following code to the `page.jsx` file:

    ```jsx
    "use client";

    import React from "react";
    import { Button, Typography } from "@mui/material";

    export default function Page() {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
        }}
        >
        <Typography variant="p">Click it:</Typography>
        <Button
            variant="contained"
            sx={{ marginLeft: "20px", textTransform: "capitalize", fontSize: "1em" }}
            onClick={() => alert("Yeah you did it!")}
        >
            Just do it
        </Button>
        </div>
    );
    }
    ```

5. Run the following command in the terminal: `npm run dev`.

6. Open your browser and go to `http://localhost:3000/example`.

7. You should see a button with the text "Just do it!". Click it and you should see an alert with the text "Yeah you did it!".

8. You can now change the button to a styled button by adding a styles.jsx file in the same folder as the page.jsx file.

9. Add the following code to the `styles.jsx` file:

    ```jsx
    "use client";

    import { styled } from "@mui/material/styles";
    import Button from "@mui/material/Button";

    const StyledButton = styled(Button)({
        marginLeft: 20,
        textTransform: "capitalize",
        fontSize: "1em",
        backgroundColor: "darkblue",
    });

    const StyledDiv = styled("div")({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
    });

    export { StyledButton, StyledDiv };
    ```

10. Update the `page.jsx` file to use the styled components:

    ```jsx
    "use client";

    import React from "react";
    import { Button, Typography } from "@mui/material";

    import { StyledButton, StyledDiv } from "./example.styles";

    export default function Page() {
    return (
        <StyledDiv>
        <Typography variant="p">Click it:</Typography>
        <StyledButton
            variant="contained"
            onClick={() => alert("Yeah you did it!")}
        >
            Just do it
        </StyledButton>
        </StyledDiv>
    );
    }
    ```

You can now start building your app using MUI components and styles.

Congratulations! You have successfully started using MUI in your app. 🎉
