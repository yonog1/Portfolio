import { Grid } from "@mui/material";
import Certifications from "../cards/Certifications";
import Objective from "../cards/Objective";
import Skills from "../cards/Skills";
import Summary from "../cards/Summary";

function Home() {
    return (
        <div>
            <Grid
                container
                padding={1}
                direction="column"
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={12} marginBottom={1}>
                    <Summary />
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Certifications />
                    </Grid>
                    <Grid item xs={4}>
                        <Skills />
                    </Grid>
                    <Grid item xs={4}>
                        <Objective />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
