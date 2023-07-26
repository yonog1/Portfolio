import {
    Box,
    Card,
    CardContent,
    CardMedia,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import csharp from "../../static/images/csharp.png";
import jscript from "../../static/images/javascript.svg";
import py from "../../static/images/python.png";

export default function SkillsText() {
    return (
        <div>
            <Card>
                <CardContent>
                    <List>
                        <Typography variant="h5">Skills</Typography>
                        <ListItem>Javascript / React</ListItem>
                        <ListItem>HTML / CSS</ListItem>
                        <ListItem>Python / Django</ListItem>
                        <ListItem>C# / ASP.NET</ListItem>
                        <ListItem>Computer Networking</ListItem>
                        <ListItem>Cloud: AWS and Azure</ListItem>
                        <ListItem>
                            Multilingual {"(English, Spanish, Hebrew)"}
                        </ListItem>
                    </List>
                    <CardMedia
                        style={{
                            display: "flex",
                            marginTop: "2.5rem",
                            justifyContent: "space-around",
                        }}
                    >
                        <Box component="img" src={csharp} width={"7rem"}></Box>
                        <Box component="img" src={py} width={"7rem"}></Box>
                        <Box component="img" src={jscript} width={"7rem"}></Box>
                    </CardMedia>
                </CardContent>
            </Card>
        </div>
    );
}
