import type { ReactNode } from "react";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProductFilterGroup = {
  id: string;
  label: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
  helperText?: string;
};

type ProductFilterPanelProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  totalCount: number;
  resultCount: number;
  searchPlaceholder: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onClear: () => void;
  groups: ProductFilterGroup[];
  sortValue?: string;
  sortOptions?: Array<{ label: string; value: string }>;
  onSortChange?: (value: string) => void;
  extraControls?: ReactNode;
  variant?: "top" | "sidebar";
  className?: string;
};

const ProductFilterPanel = ({
  eyebrow = "Smart Filters",
  title,
  description,
  totalCount,
  resultCount,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  onClear,
  groups,
  sortValue,
  sortOptions,
  onSortChange,
  extraControls,
  variant = "top",
  className,
}: ProductFilterPanelProps) => {
  const isSidebar = variant === "sidebar";
  const activeFilterCount = groups.reduce((total, group) => total + group.selected.length, 0);

  return (
    <section
      className={cn(
        "rounded-[28px] border border-border bg-card/95 p-5 shadow-sm backdrop-blur md:p-6",
        isSidebar && "h-fit lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:overscroll-contain lg:pr-3",
        className,
      )}
    >
      <div className={cn("gap-4", isSidebar ? "space-y-4" : "flex flex-wrap items-start justify-between")}>
        <div className={cn(isSidebar ? "max-w-none" : "max-w-2xl")}>
          <div className="inline-flex items-center gap-2 rounded-full bg-highlight/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-highlight">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h3 className={cn("mt-3 font-display font-bold text-navy", isSidebar ? "text-xl" : "text-2xl")}>{title}</h3>
          {description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p> : null}
        </div>

        {isSidebar ? (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-background px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/70">Showing</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-semibold text-navy">{resultCount}</span> of {totalCount}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/70">Active</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-semibold text-navy">{activeFilterCount}</span> filters
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClear}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-muted"
            >
              <RotateCcw className="h-4 w-4" />
              Clear all
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
              <span className="font-semibold text-navy">{resultCount}</span> of {totalCount} products
            </div>
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-muted"
            >
              <RotateCcw className="h-4 w-4" />
              Clear all
            </button>
          </div>
        )}
      </div>

      <div className={cn("mt-6", isSidebar ? "space-y-4" : "grid gap-4 xl:grid-cols-[minmax(0,280px)_1fr]")}>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-navy/70">Search</span>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={searchValue}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-2xl border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
            </div>
          </label>

          {sortOptions && sortValue && onSortChange ? (
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-navy/70">Sort by</span>
              <select
                value={sortValue}
                onChange={(event) => onSortChange(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          {extraControls}
        </div>

        <div className={cn(isSidebar ? "space-y-4" : "grid gap-4 md:grid-cols-2")}>
          {groups.map((group) => (
            <div key={group.id} className="rounded-2xl border border-border bg-background/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy/75">{group.label}</p>
                {group.selected.length > 0 ? (
                  <span className="rounded-full bg-highlight/10 px-2.5 py-1 text-[11px] font-semibold text-highlight">
                    {group.selected.length} selected
                  </span>
                ) : null}
              </div>
              {group.helperText ? (
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{group.helperText}</p>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const isActive = group.selected.includes(option);

                  return (
                    <button
                      key={`${group.id}-${option}`}
                      type="button"
                      onClick={() => group.onToggle(option)}
                      className={cn(
                        "rounded-full border px-3 py-2 text-xs font-semibold transition-all",
                        isActive
                          ? "border-navy bg-navy text-primary-foreground shadow-sm"
                          : "border-border bg-card text-navy hover:border-highlight hover:text-highlight",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFilterPanel;
