import React from "react";
import { useSnackbar } from "notistack";

export function useCustomSnackBar() {
    const { enqueueSnackbar } = useSnackbar();

    const snackBar_success = () => {
        enqueueSnackbar("Successful!", {
            variant: "success",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
            },
            autoHideDuration: 1500,
        });
    };

    const snackBar_error = () => {
        enqueueSnackbar("Error!", {
            variant: "error",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
            },
            autoHideDuration: 1500,
        });
    };

    return { snackBar_success, snackBar_error };
}
