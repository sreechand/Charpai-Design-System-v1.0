import React from 'react';

/**
 * Several navigation metaphors coexist; none of them dominates. The switch
 * itself stays Foundation-quiet so it reads the same in every Memory World.
 */
export function ViewSwitch<T extends string>({
  options,
  value,
  onChange,
  label





}: {options: Array<{id: T;label: string;count?: string;}>;value: T;onChange: (next: T) => void;label: string;}) {
  return (
    <nav aria-label={label} className="border-y border-ink-rule">
      <ul className="flex flex-wrap items-stretch">
        {options.map((option) => {
          const active = option.id === value;
          return (
            <li key={option.id}>
              <button
                type="button"
                onClick={() => onChange(option.id)}
                aria-current={active ? 'page' : undefined}
                className={`flex items-baseline gap-2 border-b-2 px-4 py-3 font-ui text-sm transition-colors duration-150 ${
                active ?
                'border-ink text-ink' :
                'border-transparent text-ink-soft hover:text-ink'}`
                }>
                
                {option.label}
                {option.count &&
                <span className="font-doc text-doc uppercase text-ink-faint">
                    {option.count}
                  </span>
                }
              </button>
            </li>);

        })}
      </ul>
    </nav>);

}