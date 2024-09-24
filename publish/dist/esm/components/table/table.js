import { Minus } from "@medusajs/icons";
import * as React from "react";
import { Button } from "../button";
import { clx } from "../../utils/clx";
const Root = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { className: "border border-ui-border-base border-transparent w-full rounded-lg overflow-hidden" },
    React.createElement("table", { ref: ref, className: clx("text-ui-fg-subtle txt-compact-small w-full border-t-transparent", className), ...props }))));
Root.displayName = "Table";
const Row = React.forwardRef(({ className, ...props }, ref) => (React.createElement("tr", { ref: ref, className: clx("bg-ui-bg-base hover:bg-ui-bg-base-hover border-ui-border-base transition-fg border-b last:border-b-transparent", "[&_td:last-child]:pr-8 [&_th:last-child]:pr-8", "[&_td:first-child]:pl-8 [&_th:first-child]:pl-8", className), ...props })));
Row.displayName = "Table.Row";
const Cell = React.forwardRef(({ className, ...props }, ref) => (React.createElement("td", { ref: ref, className: clx("h-12 pr-3", className), ...props })));
Cell.displayName = "Table.Cell";
const Header = React.forwardRef(({ className, ...props }, ref) => (React.createElement("thead", { ref: ref, className: clx("border-ui-border-base txt-compact-small-plus [&_tr:hover]:bg-ui-bg-base border-b", className), ...props })));
Header.displayName = "Table.Header";
const HeaderCell = React.forwardRef(({ className, ...props }, ref) => (React.createElement("th", { ref: ref, className: clx("h-12 pr-3 text-left border-b", className), ...props })));
HeaderCell.displayName = "Table.HeaderCell";
const Body = React.forwardRef(({ className, ...props }, ref) => (React.createElement("tbody", { ref: ref, className: clx("border-ui-border-base border-b-transparent", className), ...props })));
Body.displayName = "Table.Body";
const Pagination = React.forwardRef(({ className, count, pageSize, pageCount, pageIndex, canPreviousPage, canNextPage, nextPage, previousPage, ...props }, ref) => {
    const { from, to } = React.useMemo(() => {
        const from = count === 0 ? count : pageIndex * pageSize + 1;
        const to = Math.min(count, (pageIndex + 1) * pageSize);
        return { from, to };
    }, [count, pageIndex, pageSize]);
    return (React.createElement("div", { ref: ref, className: clx("text-ui-fg-subtle txt-compact-small-plus flex w-full items-center justify-between px-5 pb-6 pt-4", className), ...props },
        React.createElement("div", { className: "inline-flex items-center gap-x-1 px-3 py-[5px]" },
            React.createElement("p", null, from),
            React.createElement(Minus, { className: "text-ui-fg-muted" }),
            React.createElement("p", null, `${to} of ${count} results`)),
        React.createElement("div", { className: "flex items-center gap-x-2" },
            React.createElement("div", { className: "inline-flex items-center gap-x-1 px-3 py-[5px]" },
                React.createElement("p", null,
                    pageIndex + 1,
                    " of ",
                    Math.max(pageCount, 1))),
            React.createElement(Button, { variant: "transparent", onClick: previousPage, disabled: !canPreviousPage }, "Prev"),
            React.createElement(Button, { variant: "transparent", onClick: nextPage, disabled: !canNextPage }, "Next"))));
});
Pagination.displayName = "Table.Pagination";
const Table = Object.assign(Root, {
    Row,
    Cell,
    Header,
    HeaderCell,
    Body,
    Pagination,
});
export { Table };
//# sourceMappingURL=table.js.map