var TV_point_template_point = {
  title: "{Name}",
  content:
    "Địa điểm này thuộc <b>{Location}</b>.<br>" +
    "Được xây dựng vào năm <b>{Year}</b>",
};

var TV_point_template_line = {
  title: "{Name}",
  content: "Tổng chiều dài của quốc lộ: <b>{length}</b> km.<br>",
};
var TV_point_template_polygon = {
  title: "{Name}",
  content:
    "Dân số: <b>{Population}</b> người.<br>" + "Diện tích: <b>{Area}</b> km².",
};
var TV_jsondata = {
  points: [
    {
      type: "point",
      longitude: 106.30427420868182,
      latitude: 9.915877255168652,
      Name: "Chùa Khmer chùa Âng",
      Location: "tỉnh Trà Vinh",
      Year: "1842",
      symbol: {
        type: "picture-marker",
        url: "./icons/temple.png",
        width: "24px",
        height: "24px",
        yoffset: "12px",
      },
      popupTemplate: TV_point_template_point,
    },
  ],
  lines: [
    {
      type: "polyline",
      paths: [
        [106.0626678164363, 9.94562788137515],
        [106.07113057335022, 9.94399623463778],
        [106.07271999323548, 9.943139845357363],
        [106.07385583767791, 9.941933171142635]
      ],
      symbol: {
        type: "simple-line",
        color: [100, 100, 100],
        width: 2,
      },
      Name: "Quốc lộ 54",
      length: "155",
      popupTemplate: TV_point_template_line,
    },
  ],
  polygons: [
    {
      type: "polygon",
      rings: [
        [106.001207, 9.872294],
        [106.440569, 9.640962],
        [106.324208, 9.904905]
      ],
      Name: "Tỉnh Trà Vinh",
      Population: "1,798 triệu",
      Area: "3.312",
      symbol: {
        type: "simple-fill",
        color: [117, 139, 179, 0.5],
        outline: {
          color: [0, 0, 0],
          width: 1,
        },
      },
    },
  ],
};


