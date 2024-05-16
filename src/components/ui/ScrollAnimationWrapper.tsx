"use client";
import React, { ReactNode, useEffect, useRef, ElementType } from "react";
import "./ScrollAnimationWrapper.css";
import { cn } from "@b/lib/utils";

interface ScrollAnimationWrapperProps {
  /**
   * Children elements to be rendered inside the wrapper.
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * CSS class that defines the animation to apply when the element comes into view.
   * This class should be defined in your CSS with keyframe animations.
   * @type {string}
   */
  animationClass:
    | "fadeIn"
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleUp"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "rotateIn"
    | string;

  /**
   * The HTML element type to render as the component root node.
   * @type {ElementType}
   */
  element?: ElementType;

  /**
   * Additional class names to be applied to the element.
   * @type {string}
   */
  className?: string;
}

/**
 * A wrapper component that applies a CSS animation class to its children
 * when they scroll into view. This component uses the Intersection Observer
 * API to detect when it is visible on the screen.
 *
 * @param {ScrollAnimationWrapperProps} props - The props for this component.
 * @returns {React.ReactElement} The component with applied animation on scroll.
 *
 * @example
 * <ScrollAnimationWrapper animationClass="fadeInUp" element="section">
 *   <div className="content">This will fade in up when scrolled into view.</div>
 * </ScrollAnimationWrapper>
 */
const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animationClass,
  element: Component = "div",
  className,
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      },
      {
        threshold: 0.2, // Adjust this value based on when you want the animation to trigger
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass]);

  return React.createElement(
    Component,
    {
      ref: ref,
      className: cn("opacity-0", className),
    },
    children
  );
};

export default ScrollAnimationWrapper;
