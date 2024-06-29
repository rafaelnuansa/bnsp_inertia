import { cn } from "@/lib/utils";

export function Logo({ className, ...props }) {
    return (
        <svg
            {...props}
            className={cn("size-8 w-auto text-foreground", className)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.8504 4.62555C19.8578 4.65281 19.8615 4.68091 19.8616 4.70915V9.09795C19.8616 9.15428 19.8467 9.20961 19.8185 9.25835C19.7903 9.3071 19.7497 9.34752 19.7008 9.37555L16.0172 11.4963V15.6999C16.0172 15.8143 15.9564 15.9199 15.8572 15.9775L8.168 20.4039C8.1504 20.4139 8.1312 20.4203 8.112 20.4271C8.1048 20.4295 8.098 20.4339 8.0904 20.4359C8.03665 20.4501 7.98015 20.4501 7.9264 20.4359C7.9176 20.4335 7.9096 20.4287 7.9012 20.4255C7.8836 20.4191 7.8652 20.4135 7.8484 20.4039L0.1608 15.9775C0.111963 15.9495 0.0713843 15.9091 0.0431538 15.8603C0.0149234 15.8116 3.86958e-05 15.7563 0 15.6999V2.53355C0 2.50475 0.004 2.47675 0.0112 2.44955C0.0136 2.44035 0.0192 2.43195 0.0224 2.42275C0.0284 2.40595 0.034 2.38875 0.0428 2.37315C0.0488 2.36275 0.0576 2.35435 0.0648 2.34475C0.074 2.33195 0.0824 2.31875 0.0932 2.30755C0.1024 2.29835 0.1144 2.29155 0.1248 2.28355C0.1364 2.27395 0.1468 2.26355 0.16 2.25595L4.0044 0.0427485C4.05307 0.0147407 4.10824 0 4.1644 0C4.22056 0 4.27573 0.0147407 4.3244 0.0427485L8.1684 2.25595C8.1812 2.26395 8.1928 2.27395 8.2044 2.28315C8.2148 2.29115 8.2264 2.29835 8.2356 2.30715C8.2468 2.31875 8.2548 2.33195 8.2644 2.34475C8.2712 2.35435 8.2804 2.36275 8.286 2.37315C8.2952 2.38915 8.3004 2.40595 8.3068 2.42275C8.31 2.43195 8.3156 2.44035 8.318 2.44995C8.32536 2.47721 8.32913 2.50531 8.3292 2.53355V10.7571L11.5324 8.91275V4.70875C11.5324 4.68075 11.5364 4.65235 11.5436 4.62555C11.5464 4.61595 11.5516 4.60755 11.5548 4.59835C11.5612 4.58155 11.5668 4.56435 11.5756 4.54875C11.5816 4.53835 11.5904 4.52995 11.5972 4.52035C11.6068 4.50755 11.6148 4.49435 11.626 4.48315C11.6352 4.47395 11.6468 4.46715 11.6572 4.45915C11.6692 4.44955 11.6796 4.43915 11.6924 4.43155L15.5372 2.21835C15.5859 2.1903 15.641 2.17554 15.6972 2.17554C15.7534 2.17554 15.8085 2.1903 15.8572 2.21835L19.7012 4.43155C19.7148 4.43955 19.7252 4.44955 19.7372 4.45875C19.7472 4.46675 19.7588 4.47395 19.768 4.48275C19.7792 4.49435 19.7872 4.50755 19.7968 4.52035C19.804 4.52995 19.8128 4.53835 19.8184 4.54875C19.8276 4.56435 19.8328 4.58155 19.8392 4.59835C19.8428 4.60755 19.848 4.61595 19.8504 4.62555ZM19.2208 8.91275V5.26315L16.0172 7.10755V10.7571L19.2208 8.91275ZM15.3768 15.5147V11.8627L8.3288 15.8859V19.5723L15.3768 15.5147ZM0.6408 3.08755V15.5147L7.688 19.5719V15.8863L4.0064 13.8027L4.0052 13.8019L4.0036 13.8011C3.9912 13.7939 3.9808 13.7835 3.9692 13.7747C3.9592 13.7667 3.9476 13.7603 3.9388 13.7515L3.938 13.7503C3.9276 13.7403 3.9204 13.7279 3.9116 13.7167C3.9036 13.7059 3.894 13.6967 3.8876 13.6855L3.8872 13.6843C3.88 13.6723 3.8756 13.6579 3.8704 13.6443C3.8652 13.6323 3.8584 13.6211 3.8552 13.6083C3.8512 13.5931 3.8504 13.5767 3.8488 13.5611C3.8472 13.5491 3.844 13.5371 3.844 13.5251V4.93195L0.6408 3.08755ZM4.1648 0.689948L0.962 2.53355L4.164 4.37715L7.3664 2.53315L4.1648 0.689948ZM7.6884 11.1259V3.08755L4.4848 4.93195V12.9703L7.6884 11.1259ZM15.6972 2.86555L12.4948 4.70915L15.6972 6.55275L18.8992 4.70875L15.6972 2.86555ZM15.3768 7.10755L12.1732 5.26315V8.91275L15.3768 10.7571V7.10755ZM8.008 15.3319L15.0532 11.3103L11.8532 9.46795L4.8108 13.5223L8.008 15.3319Z"
                fill="currentColor"
            />
        </svg>
    );
}