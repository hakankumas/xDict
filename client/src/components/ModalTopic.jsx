import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Grid from "@mui/material/Grid2";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
const top100Films = [
    { label: "Batman Begins" },
    { label: "The Dark Knight" },
    { label: "The Dark Knight Rises" },
];

const tags = [
    { label: "sport" },
    { label: "health" },
    { label: "mag" },
    { label: "science" },
];

function ModalTopic({ show, setShow }) {
    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState([]);

    const handleSubmit = () => {
        if (!topic || !content || !tag) {
            alert("Please fill all the fields");
            return;
        }
        setTopic(topic);
        setContent(content);
        setTag(tag);
        setShow(false);
        console.log({
            topic,
            content,
            tag,
        });
    };

    return (
        <div>
            <Modal
                open={show}
                onClose={() => setShow(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid
                            size={12}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                        >
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                style={{ textAlign: "center" }}
                            >
                                Create a New Post!
                            </Typography>

                            <Autocomplete
                                disablePortal
                                options={top100Films}
                                getOptionLabel={(option) =>
                                    (option && option.label) || ""
                                }
                                value={
                                    top100Films.find(
                                        (film) => film.label === topic
                                    ) || null
                                }
                                onChange={(event, newValue) => {
                                    setTopic(newValue ? newValue.label : "");
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Topic" />
                                )}
                            />

                            <TextField
                                id="outlined-basic"
                                label="Content"
                                variant="outlined"
                                multiline
                                minRows={2}
                                maxRows={7}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />

                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={tags}
                                disableCloseOnSelect
                                getOptionLabel={(option) =>
                                    (option && option.label) || ""
                                }
                                value={tags.filter((tagItem) =>
                                    tag.includes(tagItem.label)
                                )}
                                onChange={(event, newValue) => {
                                    if (Array.isArray(newValue)) {
                                        setTag(
                                            newValue.map((item) => item.label)
                                        );
                                    }
                                }}
                                renderOption={(props, option, { selected }) => {
                                    const { key, ...optionProps } = props;
                                    return (
                                        <li key={key} {...optionProps}>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            #{option.label}
                                        </li>
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="#Tag" />
                                )}
                            />
                        </Grid>
                        <Grid
                            size={12}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                margin: "20px 0px",
                            }}
                        >
                            <Button variant="contained" onClick={handleSubmit}>
                                Let's Create!
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalTopic;
