import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopic } from "../redux/features/topic/topicSlice";

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
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { addPost } from "../redux/features/post/postSlice";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

const tags = [
    { label: "sport" },
    { label: "health" },
    { label: "mag" },
    { label: "science" },
];

function ModalTopic({ show, setShow }) {
    const { topics } = useSelector((state) => state.topic);
    const dispatch = useDispatch();

    const [topic, setTopic] = useState("");
    const [newTopic, setNewTopic] = useState("");
    const [newTopicStatus, setNewTopicStatus] = useState("");

    // Create a new topic
    useEffect(() => {
        setTopic("");
        if (newTopic) {
            const condition = {
                topic_name: newTopic,
            };
            console.log("newTopic: ", condition.topic_name);
            dispatch(addTopic(condition));
            setNewTopicStatus(`Successfully created: ${newTopic}`);
        }
    }, [newTopic]);

    const [content, setContent] = useState("");
    const ls_token = localStorage?.getItem("token");
    const handleSubmit = () => {
        if (!topic || !content) return alert("Please fill all the fields");

        setTopic(topic);
        setContent(content);

        const condition = {
            topic,
            content,
            token: ls_token,
        };

        dispatch(addPost(condition));
        setShow(false);
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
                            }}
                        >
                            <Stack spacing={1}>
                                <Item
                                    sx={{
                                        boxShadow: "none",
                                        paddingBottom: newTopicStatus
                                            ? "0px"
                                            : "20px",
                                    }}
                                >
                                    <Typography
                                        id="modal-modal-title"
                                        sx={{
                                            textAlign: "center",
                                            fontSize: "25px",
                                        }}
                                    >
                                        Create Something!
                                    </Typography>
                                </Item>

                                {newTopicStatus && (
                                    <Item
                                        sx={{
                                            boxShadow: "none",
                                            paddingBottom: "10px",
                                        }}
                                    >
                                        <Typography
                                            id="modal-modal-title"
                                            sx={{
                                                textAlign: "center",
                                                color: "green",
                                                fontSize: "15px",
                                            }}
                                        >
                                            {newTopicStatus}
                                        </Typography>
                                    </Item>
                                )}
                            </Stack>

                            <Stack spacing={2}>
                                <Item sx={{ boxShadow: "none", padding: "0" }}>
                                    <Autocomplete
                                        options={topics}
                                        getOptionLabel={(topic) =>
                                            topic.topic_name || ""
                                        }
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Topic"
                                            />
                                        )}
                                        freeSolo
                                        onChange={(event, newValue) => {
                                            if (
                                                newValue &&
                                                typeof newValue === "string"
                                            ) {
                                                // Eğer kullanıcı öneri dışı bir değer eklediyse
                                                setNewTopic(newValue);
                                                console.log(
                                                    `Added new value: ${newValue}`
                                                );
                                            } else if (
                                                newValue &&
                                                newValue.inputValue
                                            ) {
                                                // Eğer "Add x" butonuna tıkladıysa sadece girilen değeri ayarlayın
                                                setNewTopic(
                                                    newValue.inputValue
                                                );
                                                console.log(
                                                    `Added new value: ${newValue.inputValue}`
                                                );
                                            } else {
                                                setTopic(newValue);
                                            }
                                        }}
                                        filterOptions={(topics, params) => {
                                            const filtered = topics.filter(
                                                (topic) =>
                                                    topic.topic_name
                                                        .toLowerCase()
                                                        .includes(
                                                            params.inputValue.toLowerCase()
                                                        )
                                            );

                                            // Eğer mevcut seçenekler arasında girilen değer yoksa, ekleme opsiyonu ekleyin
                                            if (
                                                params.inputValue !== "" &&
                                                !filtered.some(
                                                    (topic) =>
                                                        topic.topic_name ===
                                                        params.inputValue
                                                )
                                            ) {
                                                filtered.push({
                                                    topic_name: `Add "${params.inputValue}"`,
                                                    inputValue:
                                                        params.inputValue,
                                                });
                                            }

                                            return filtered;
                                        }}
                                        value={topic || newTopic}
                                    />
                                </Item>

                                <Item sx={{ boxShadow: "none", padding: "0" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Content"
                                        variant="outlined"
                                        sx={{ width: "100%" }}
                                        multiline
                                        minRows={3}
                                        maxRows={7}
                                        value={content}
                                        onChange={(e) =>
                                            setContent(e.target.value)
                                        }
                                    />
                                </Item>

                                {/* <Item sx={{ boxShadow: "none", padding: "0" }}>
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
                                                    newValue.map(
                                                        (item) => item.label
                                                    )
                                                );
                                            }
                                        }}
                                        renderOption={(
                                            props,
                                            option,
                                            { selected }
                                        ) => {
                                            const { key, ...optionProps } =
                                                props;
                                            return (
                                                <li key={key} {...optionProps}>
                                                    <Checkbox
                                                        icon={icon}
                                                        checkedIcon={
                                                            checkedIcon
                                                        }
                                                        style={{
                                                            marginRight: 8,
                                                        }}
                                                        checked={selected}
                                                    />
                                                    #{option.label}
                                                </li>
                                            );
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="#Tag"
                                            />
                                        )}
                                    />
                                </Item> */}

                                <Item
                                    sx={{
                                        boxShadow: "none",
                                        padding: "0",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        Let's Create!
                                    </Button>
                                </Item>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalTopic;
