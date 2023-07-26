import { Grid } from "@mui/material";
import Certifications from "../Certifications";
import Objective from "../Objective";
import Skills from "../Skills";
import Summary from "../Summary";

function Home() {
    return (
        <div>
            <Grid //summary
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
