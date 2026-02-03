import {
    BsMicrosoft,
    BsFileEarmarkText,
    BsGlobe,
    BsEnvelope,
    BsCardImage,
    BsApple,
    BsArchive,
    BsCodeSlash,
    BsDatabase,
    BsFileEarmarkPdf
} from "react-icons/bs";

export const formatGroups = [
    {
        groupName: "Microsoft Office",
        icon: BsMicrosoft,
        formats: [
            "DOCX", "XLSX", "PPTX",
            "DOC", "XLS", "XLSB", "PPT", "RTF"
        ],
        description: "Office Open XML, legacy binary formats, and RTF."
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
        groupName: "Portable Document Format",
        icon: BsFileEarmarkPdf,
        formats: ["PDF"],
        description: "With OCR of embedded images."
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