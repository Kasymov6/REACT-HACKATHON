import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { productContext } from "../../context/ProductContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));
const Sidebar = ({ history }) => {
  console.log(history);
  const classes = useStyles();
  const { getProducts } = useContext(productContext);

  const [sliderValue, setSliderValue] = useState(getSlider());
  const [memory, setMemory] = useState(getMemory());

  function getMemory() {
    const search = new URLSearchParams(history.location.search);
    return search.get("category");
  }

  function getSlider() {
    const search = new URLSearchParams(history.location.search);
    return search.get("price_lte");
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
      history.push(`${history.location.pathname.replace("category")}`);
      getProducts(history);
      setMemory(e.target.value);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("category", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setMemory(e.target.value);
  };
  return (
    <Grid item m={3}>
      <Paper className={classes.paper}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Memory</FormLabel>
          <RadioGroup
            value={memory}
            onChange={handleChangeMemory}
            aria-label="memory"
            name="memory"
          >
            <FormControlLabel value="500" control={<Radio />} label="500" />
            <FormControlLabel value="1000" control={<Radio />} label="1000" />
            <FormControlLabel value="2000" control={<Radio />} label="2000" />
            <FormControlLabel value="3000" control={<Radio />} label="3000" />
            <FormControlLabel value="4000" control={<Radio />} label="4000" />
            <FormControlLabel value="All" control={<Radio />} label="ALL" />
          </RadioGroup>
        </FormControl>
        <Grid>
          <Slider
            min={500}
            max={20000}
            value={sliderValue}
            onChange={handleSliderValue}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
