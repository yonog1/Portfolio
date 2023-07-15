import {
    List,
    Typography,
    ListItem,
    Card,
    CardContent,
    Box,
    CardMedia,
} from "@mui/material";
import csharp from "../../static/images/csharp.png";
import py from "../../static/images/python.png";
import jscript from "../../static/images/javascript.svg";

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
                        <Box component="img" src={csharp} width={"8rem"}></Box>
                        <Box component="img" src={py} width={"8rem"}></Box>
                        <Box component="img" src={jscript} width={"8rem"}></Box>
                    </CardMedia>
                </CardContent>
            </Card>
        </div>
    );
}
