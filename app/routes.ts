import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/highlight", "./routes/highlight.tsx"),
  route("/accordion", "./routes/accordion.tsx"),
  route("/banners", "./routes/banners.tsx"),
  route("/beam", "./routes/beam.tsx"),
  route("/border_button", "./routes/border_button.tsx"),
  route("/cardtridi", "./routes/cardtridi.tsx"),
  route("/carrousell", "./routes/carrousell.tsx"),
  route("/drawer", "./routes/drawer.tsx"),
  route("/flipper", "./routes/flipper.tsx"),
  route("/flipwords", "./routes/flipwords.tsx"),
  route("/grid-gallery", "./routes/grid-gallery.tsx"),
  route("/jackpot", "./routes/jackpot.tsx"),
  route("/moving_border", "./routes/moving_border.tsx"),
  route("/phone_hero", "./routes/phone_hero.tsx"),
  route("/reorder", "./routes/reorder.tsx"),
  route("/rotary", "./routes/rotary.tsx"),
  route("/swipe_gallery", "./routes/swipe_gallery.tsx"),
  route("/infinity-moving", "./routes/infinity-moving.tsx"),
  route("/image_slider", "./routes/image_slider.tsx"),
] satisfies RouteConfig;
