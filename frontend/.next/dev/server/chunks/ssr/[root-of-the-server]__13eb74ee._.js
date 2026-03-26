module.exports = [
"[project]/pages/form.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BusinessInfo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Signup.module.css [ssr] (css module)");
;
;
;
function BusinessInfo() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submitted Data:", formData);
        alert("Form Submitted Successfully!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessTitle,
                    children: "Business Information Form"
                }, void 0, false, {
                    fileName: "[project]/pages/form.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessSubtitle,
                    children: "Lorem Ipsum is simply dummy text of the printing"
                }, void 0, false, {
                    fileName: "[project]/pages/form.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Full Name",
                                name: "fullName",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fullWidth}`,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Business Name",
                                name: "businessName",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                name: "segment",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput,
                                onChange: handleChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Business Segment"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                        value: "Retail",
                                        children: "Retail"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                        value: "Manufacturing",
                                        children: "Manufacturing"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                        value: "Service",
                                        children: "Service"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Description",
                                name: "description",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fullWidth}`,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Address 1",
                                name: "address1",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Address 2",
                                name: "address2",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].row} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fullWidth}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "City",
                                        name: "city",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].smallInput,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        name: "state",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].smallInput,
                                        onChange: handleChange,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "State"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/form.js",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "Maharashtra",
                                                children: "Maharashtra"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/form.js",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "Delhi",
                                                children: "Delhi"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/form.js",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Country",
                                        name: "country",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].smallInput,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].row} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fullWidth}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Pin",
                                        name: "pin",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pinInput,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].locationWrapper,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Location url",
                                                name: "location",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].locationInput,
                                                onChange: handleChange
                                            }, void 0, false, {
                                                fileName: "[project]/pages/form.js",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].mapLink,
                                                children: "Open Google Map ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/form.js",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Business PAN",
                                name: "pan",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Business GST",
                                name: "gst",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].businessInput,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fullWidth} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].checkboxRow}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        name: "agree",
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/form.js",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fullWidth} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].center}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Signup$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                    children: "SUBMIT"
                                }, void 0, false, {
                                    fileName: "[project]/pages/form.js",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/form.js",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/form.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/form.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/form.js",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/form.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13eb74ee._.js.map