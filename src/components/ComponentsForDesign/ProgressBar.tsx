import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC, useEffect, useState } from "react";
import { useTheme } from "@mui/material";

interface ProgressBarProps {
  onComplete: () => void;
}

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  const theme = useTheme(); // Access the theme to get the breakpoints

  // Dynamically calculate the size based on the screen size
  const size = theme.breakpoints.down("md") ? 270 : 396;

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{
          background: "transparent",
          "& .MuiCircularProgress-circle": {
            stroke: "url(#gradient)",
          },
        }}
        size={size}
        thickness={0.3}
      />
      {/* SVG для градієнту має бути окремо у компоненті, який вставляється в DOM */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(255, 255, 255)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: "rgb(255, 255, 255)",
            fontFamily: "Manrope",
            fontSize: { xs: "50px", md: "80px" },
            fontWeight: "700",
            lineHeight: "1",
            letterSpacing: "-0.04em",
          }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const ProgressBar: FC<ProgressBarProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 100); // Викликаємо onComplete із затримкою
          return 100;
        }
        return prevProgress + 10;
      });
    }, 150);
    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        zIndex: 999,
      }}
    >
      <CircularProgressWithLabel value={progress} />
    </Box>
  );
};

export default ProgressBar;
