import {
    BsMicrosoft,
    BsFileEarmarkText,
    BsGlobe,
    BsFileText,
    BsEnvelope,
    BsCardImage,
    BsApple,
    BsArchive,
    BsCodeSlash,
    BsDatabase
} from "react-icons/bs";

export const formatGroups = [
    {
        groupName: "Microsoft Office",
        icon: BsMicrosoft,
        formats: [
            "DOCX", "XLSX", "PPTX",
            "DOC", "XLS", "XLSB", "PPT"
        ],
        description: "Office Open XML (OOXML) and legacy binary formats."
    },
    {
        groupName: "OpenOffice/LibreOffice",
        icon: BsFileEarmarkText,
        formats: ["ODT", "ODS", "ODP"],
        description: "Open Document Format (ODF)."
    },
    {
        groupName: "Web",
        icon: BsGlobe,
        formats: ["HTML", "HTM", "CSS"],
        description: "Standard web page formats."
    },
    {
        groupName: "Documents",
        icon: BsFileText,
        formats: ["PDF", "RTF"],
        description: "Portable Document Format and Rich Text Format."
    },
    {
        groupName: "Email",
        icon: BsEnvelope,
        formats: ["EML", "PST", "OST"],
        description: "Email files and Microsoft Outlook archives, including attachments."
    },
    {
        groupName: "Images (OCR)",
        icon: BsCardImage,
        formats: ["JPG", "JPEG", "JFIF", "BMP", "PNM", "PNG", "TIFF", "WEBP"],
        description: "With OCR capabilities in over 100 languages."
    },
    {
        groupName: "Apple iWork",
        icon: BsApple,
        formats: ["PAGES", "NUMBERS", "KEY"],
        description: "Apple's office suite formats."
    },
    {
        groupName: "Archives",
        icon: BsArchive,
        formats: ["ZIP", "TAR", "RAR", "GZ", "BZ2", "XZ"],
        description: "Common compressed archive formats."
    },
    {
        groupName: "Source Code",
        icon: BsCodeSlash,
        formats: ["C", "CPP", "CS", "JAVA", "JS", "PHP", "PY", "GO", "and more"],
        description: "A wide variety of programming and script files."
    },
    {
        groupName: "Structured Data & Other",
        icon: BsDatabase,
        formats: ["XML", "CSV", "JSON", "YAML", "ODFXML", "MD", "LOG", "DCM"],
        description: "Data interchange, config, logs, and medical images (commercial)."
    }
];