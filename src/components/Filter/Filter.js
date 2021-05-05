import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContext";
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./Filter.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const Filter = ({ history }) => {
    const classes = useStyles();
    const { getProducts } = useContext(productContext);
    const [sliderValue, setSliderValue] = useState(getSlider());
    const [memory, setMemory] = useState(getMemory());

    function getMemory() {
        const search = new URLSearchParams(history.location.search);
        search.get("title");
    }
    function getSlider() {
        const search = new URLSearchParams(history.location.search);
        search.get("price_lte");
    }

    function handleSliderValue(e, value) {
        const search = new URLSearchParams(history.location.search);
        search.set("price_lte", value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
        setSliderValue(value);
    }

    const handleChangeMemory = (e) => {
        if (e.target.value === "All") {
            history.push(`${history.location.pathname.replace("title")}`);
            getProducts(history);
            return;
        }
        const search = new URLSearchParams(history.location.search);
        search.set("title", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
        setMemory(e.target.value);
    };

    return (
        <Grid item md={3}>
            <Paper className={classes.paper}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Memory</FormLabel>
                    <RadioGroup
                        value={memory}
                        onChange={handleChangeMemory}
                        aria-label="memory"
                        name="memory"
                    >
                        <FormControlLabel
                            value="64"
                            control={<Radio />}
                            label="64"
                        />
                        <FormControlLabel
                            value="128"
                            control={<Radio />}
                            label="128"
                        />
                        <FormControlLabel
                            value="256"
                            control={<Radio />}
                            label="256"
                        />
                        <FormControlLabel
                            value="512"
                            control={<Radio />}
                            label="512"
                        />
                        <FormControlLabel
                            value="1024"
                            control={<Radio />}
                            label="1024"
                        />
                        <FormControlLabel
                            value="All"
                            control={<Radio />}
                            label="All"
                        />
                    </RadioGroup>
                </FormControl>
                <Grid>
                    <Slider
                        value={sliderValue}
                        min={500}
                        max={20000}
                        onChange={handleSliderValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Filter;
