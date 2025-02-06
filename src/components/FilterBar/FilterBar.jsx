import {
  FormControl,
  Grid2 as Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { APP_STRINGS } from "../../constants/appStrings";

const FilterBar = ({
  searchTerm,
  searchProducts,
  sortOrder,
  updateSortOrder,
}) => {
  const { UI } = APP_STRINGS;
  const handleSortChange = (event) => {
    updateSortOrder(event.target.value);
  };

  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"flex-end"}
      spacing={2}
      mt={2}
    >
      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField
          placeholder={UI.PRODUCT_SEARCH_PLACEHOLDER}
          value={searchTerm}
          onChange={(e) => searchProducts(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 2 }}>
        <FormControl fullWidth variant="outlined" size="small">
          <Typography variant="body2">{UI.ORDER_BY}</Typography>
          <Select value={sortOrder} onChange={handleSortChange} displayEmpty>
            <MenuItem value="">{UI.SELECT}</MenuItem>
            <MenuItem value="asc">{UI.LOWER_PRICE}</MenuItem>
            <MenuItem value="desc">{UI.HIGHER_PRICE}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
