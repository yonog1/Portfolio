import { List, Typography, ListItem } from "@mui/material";

export default function SkillsText() {
    return (
        <div>
            <List>
                <Typography variant="h5">Skills</Typography>
                <ListItem>Javascript / React / Node</ListItem>
                <ListItem>HTML / CSS</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>C# / ASP.NET</ListItem>
                <ListItem>Computer Networking</ListItem>
                <ListItem>Multilingual {"(English, Spanish, Hebrew)"}</ListItem>
            </List>
        </div>
    );
}
