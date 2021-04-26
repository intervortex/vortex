import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import PostPreview from "./cms-preview-templates/posts";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("review", PostPreview);
CMS.registerPreviewTemplate("community", PostPreview);
CMS.registerPreviewTemplate("blurb", PostPreview);
CMS.registerPreviewTemplate("announcement", PostPreview);
CMS.init();
